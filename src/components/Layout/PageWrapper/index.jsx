import styles from "./index.module.css"

/**
 * PageWrapper — универсальная обёртка для всей страницы.
 * 
 * Зачем нужна:
 * 1. Служит контейнером для всей страницы и задаёт общие стили (например, отступы, фон).
 * 2. Позволяет не дублировать один и тот же div с классом wrapper на каждой странице.
 * 
 * Как использовать:
 * Вложенные элементы передаются через props.children — то, что будет рендериться внутри.
 * 
 * Пример:
 * <PageWrapper>
 *   <PageHeader>Заголовок</PageHeader>
 *   <ContentWrapper>Основной контент</ContentWrapper>
 * </PageWrapper>
 */
export function PageWrapper({ children }) {
    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    )
}