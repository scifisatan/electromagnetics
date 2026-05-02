import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
        // Dispatch custom event for same-window sync
        window.dispatchEvent(
          new CustomEvent("local-storage", { detail: { key, value: valueToStore } }),
        );
      }
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  };

  useEffect(() => {
    const handleStorageChange = (e: StorageEvent | CustomEvent) => {
      if (e instanceof StorageEvent) {
        if (e.key === key && e.newValue) {
          setStoredValue(JSON.parse(e.newValue));
        }
      } else if (e.type === "local-storage") {
        const detail = (e as CustomEvent).detail;
        if (detail.key === key) {
          setStoredValue(detail.value);
        }
      }
    };

    window.addEventListener("storage", handleStorageChange as any);
    window.addEventListener("local-storage", handleStorageChange as any);

    // Initial sync when key changes
    const item = window.localStorage.getItem(key);
    if (item) {
      setStoredValue(JSON.parse(item));
    } else {
      setStoredValue(initialValue);
    }

    return () => {
      window.removeEventListener("storage", handleStorageChange as any);
      window.removeEventListener("local-storage", handleStorageChange as any);
    };
  }, [key]);

  return [storedValue, setValue] as const;
}
