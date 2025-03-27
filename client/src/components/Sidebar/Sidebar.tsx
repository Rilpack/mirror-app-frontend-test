import styles from './Sidebar.module.scss'
import { Button } from '@/components/Elements/Button/Button'
import { Setting } from '@/components/Elements/Setting/Setting'
import { Loader } from '../Elements/Loader/Loader'
import { useContextProvider } from '@/app'

export const Sidebar = () => {
  const { settings, loading, refetch } = useContextProvider()

  // Трансформация объекта настроек в массив с переводом
  const transformSettings = () => {
    if (!settings) return []

    const layoutMap: Record<string, string> = {
      masonry: 'Плиточная верстка',
      grid: 'Сетка',
    }

    const templateMap: Record<string, string> = {
      hover: 'Наведение',
      classic: 'Классическая',
    }

    const navigationMap: Record<string, string> = {
      'load-more': "Кнопка 'Загрузить еще'",
      pagination: 'Пагинация',
    }

    const layoutTitle = layoutMap[settings.layout?.current] ?? '—'
    const templateTitle = templateMap[settings.template] ?? '—'
    const navigationTitle = navigationMap[settings.navigation] ?? '—'

    const layoutParams = settings.layout?.params?.[settings.layout?.current] || {}
    const columns = typeof layoutParams.columns === 'number' ? layoutParams.columns : '—'
    const rows = typeof layoutParams.rows === 'number' ? layoutParams.rows : '—'

    return [
      { title: 'Макет', value: layoutTitle },
      { title: 'Карточка', value: templateTitle },
      { title: 'Навигация', value: navigationTitle },
      { title: 'Колонок', value: columns },
      { title: 'Рядов', value: rows },
    ]
  }

  return (
    <div className={styles.container}>
      <Button onClick={refetch} title='Обновить' />
      {loading && <Loader />}
      {!loading &&
        <div className={styles.container_settings}>
          {transformSettings().map((setting, index) => (
            <div key={index} className={styles.container_settings_section}>
              <Setting title={setting.title} value={setting.value} />
              {transformSettings().length - 1 !== index && <div className={styles.line} />}
            </div>
          ))}
        </div>
      }
    </div>
  )
}