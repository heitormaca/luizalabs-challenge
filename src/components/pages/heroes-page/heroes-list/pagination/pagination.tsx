import {
  IconChevronLeft,
  IconChevronsLeft,
  IconChevronRight,
  IconChevronsRight,
} from '@tabler/icons-react'
import ButtonIcon from './button-icon'
import s from './pagination.module.scss'
import { useSearchParams } from 'react-router-dom'
import usePagination from '../../../../../hooks/usePagination'
import Select from './select'

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
            disabled={currentPage + 1 > totalPages}
          >
            <IconChevronRight
              size={18}
              color={currentPage + 1 > totalPages ? 'gray' : 'red'}
            />
          </ButtonIcon>
          <ButtonIcon
            onClick={goToLastPage}
            disabled={currentPage + 1 > totalPages}
          >
            <IconChevronsRight
              size={18}
              color={currentPage + 1 > totalPages ? 'gray' : 'red'}
            />
          </ButtonIcon>
        </div>
      </div>
    </div>
  )
}
export default Pagination
