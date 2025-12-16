import styles from "./index.module.css"

/**
 * PageHeader — шапка страницы.
 * 
 * Зачем нужен:
 * 1. Контейнер для заголовка или навигации.
 * 2. Позволяет одинаково стилизовать хедер на всех страницах.
 * 
 * Как использовать:
 * Вложенные элементы (например, заголовки, кнопки) рендерятся внутри через children.
 */
export function PageHeader({ children }) {
    return (
        <header className={styles.header}>
            {children}
        </header>
    )
}