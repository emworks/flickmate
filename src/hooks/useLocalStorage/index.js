import { useState, useEffect, useRef } from "react";
import { createLocalStorage } from "src/adapters/local-storage-adapter";

/**
 * useLocalStorage — реактивный хук поверх localStorage
 *
 * Предназначен для того, чтобы хранить состояние в localStorage,
 * и чтобы React автоматически рендерил компонент при изменении значения.
 *
 * @param {string} storageKey - ключ для localStorage
 * @param {any} defaultValue - значение по умолчанию
 * @returns { value, setValue }
 */
export function useLocalStorage(storageKey, defaultValue) {
  // Используем useRef для хранения экземпляра адаптера
  // Ref гарантирует, что адаптер не будет пересоздаваться при каждом рендере
  const storageRef = useRef(createLocalStorage(storageKey));

  // useState для реактивного состояния
  // Инициализируем значением из localStorage, если оно есть, иначе defaultValue
  const [value, setValue] = useState(() => {
    const stored = storageRef.current.value;
    return stored ?? defaultValue;
  });

  // useEffect для синхронизации изменения value в localStorage
  // Каждый раз, когда value меняется, записываем новое значение в storage
  useEffect(() => {
    storageRef.current.value = value;
  }, [value]);

  return { value, setValue };
}