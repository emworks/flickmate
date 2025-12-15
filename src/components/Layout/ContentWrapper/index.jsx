import styles from "./index.module.css"

/**
 * ContentWrapper — контейнер для основного контента страницы.
 * 
 * Зачем нужен:
 * 1. Служит контейнером для основной части страницы (список фильмов, плеер и т.д.).
 * 2. Позволяет унифицировать отступы и ширину контента.
 * 
 * Как использовать:
 * Всё, что должно быть внутри основного контента страницы, помещается внутрь компонента:
 * <ContentWrapper>
 *   <MovieList movies={movies} />
 * </ContentWrapper>
 */
export function ContentWrapper({ children }) {
    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    )
}