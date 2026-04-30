import { get, set, del } from "idb-keyval";

export const saveImage = async (base64Data: string): Promise<string> => {
  const id = `img_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
  await set(id, base64Data);
  return id;
};

export const loadImage = async (id: string): Promise<string | undefined> => {
  return await get(id);
};

export const deleteImage = async (id: string): Promise<void> => {
  await del(id);
};
