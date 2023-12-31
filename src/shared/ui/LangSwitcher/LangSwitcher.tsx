import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { classNames } from 'shared/lib/classNames/classNames'

interface LangSwitcherProps {
    className?: string
}
export function LangSwitcher ({ className = '' }: LangSwitcherProps) {
    const { t, i18n } = useTranslation()

    const onToggle = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ButtonTheme.CLEAR}
            onClick={onToggle}
        >
            {t('Перевод')}
        </Button>
    )
}
