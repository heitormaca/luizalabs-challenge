import { IconClipboardOff } from '@tabler/icons-react'
import s from './no-data.module.scss'

const NoData: React.FC = () => {
  return (
    <div className={s.wrapper}>
      <IconClipboardOff width={30} color="red" />
      <span>Sem dados</span>
    </div>
  )
}
export default NoData
