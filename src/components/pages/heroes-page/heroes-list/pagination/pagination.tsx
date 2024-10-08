import { useSearchParams } from 'react-router-dom'
import {
  IconChevronLeft,
  IconChevronsLeft,
  IconChevronRight,
  IconChevronsRight,
} from '@tabler/icons-react'
import usePagination from '../../../../../hooks/usePagination'
import { ButtonIcon } from '../../../../shared'
import Select from './select'
import s from './pagination.module.scss'

interface PaginationProps {
  offset: number
  limit: number
  total: number
}

const Pagination: React.FC<PaginationProps> = ({
  offset: initialOffset,
  limit,
  total,
}) => {
  const [, setSearchParams] = useSearchParams()

  const {
    currentPage,
    totalPages,
    goToFirstPage,
    goToLastPage,
    goToNextPage,
    goToPreviousPage,
  } = usePagination({ initialOffset, limit, total, setSearchParams })

  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <div className={s.select_wrapper}>
          <span>Itens por página</span>
          <Select total={total} />
        </div>
        <span>{`Página ${currentPage} de ${totalPages}`}</span>
        <div className={s.buttons}>
          <ButtonIcon onClick={goToFirstPage} disabled={currentPage - 1 <= 0}>
            <IconChevronsLeft
              size={18}
              color={currentPage - 1 <= 0 ? 'gray' : 'red'}
            />
          </ButtonIcon>
          <ButtonIcon
            onClick={goToPreviousPage}
            disabled={currentPage - 1 <= 0}
          >
            <IconChevronLeft
              size={18}
              color={currentPage - 1 <= 0 ? 'gray' : 'red'}
            />
          </ButtonIcon>
          <ButtonIcon
            onClick={goToNextPage}
            disabled={currentPage >= totalPages}
          >
            <IconChevronRight
              size={18}
              color={currentPage >= totalPages ? 'gray' : 'red'}
            />
          </ButtonIcon>
          <ButtonIcon
            onClick={goToLastPage}
            disabled={currentPage >= totalPages}
          >
            <IconChevronsRight
              size={18}
              color={currentPage >= totalPages ? 'gray' : 'red'}
            />
          </ButtonIcon>
        </div>
      </div>
    </div>
  )
}
export default Pagination
