import { useState, useEffect, useRef } from "react";
import { createLocalStorage } from "src/adapters/local-storage-adapter";

export function useLocalStorage(storageKey, defaultValue) {
  const storageRef = useRef(createLocalStorage(storageKey));

  const [value, setValue] = useState(() => {
    const stored = storageRef.current.value;
    return stored ?? defaultValue;
  });

  useEffect(() => {
    storageRef.current.value = value;
  }, [value]);

  return { value, setValue };
}