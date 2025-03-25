import styles from './Sidebar.module.scss'
import { Button } from '@/components/Elements/Button/Button'
import { Setting } from '../Elements/Setting/Setting'
import { Settings } from '@/typescript/interfaces'

export const Sidebar = ({ settings, fetchSettings }: { settings: Settings | null, fetchSettings: () => Promise<void> }) => {

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
      <Button onClick={fetchSettings} title='Обновить' />
      <div className={styles.container_settings}>
        {transformSettings().map((setting, index) => (
          <div key={index} className={styles.container_settings_section}>
            <Setting title={setting.title} value={setting.value} />
            {transformSettings().length - 1 !== index && <div className={styles.line} />}
          </div>
        ))}
      </div>
    </div>
  )
}