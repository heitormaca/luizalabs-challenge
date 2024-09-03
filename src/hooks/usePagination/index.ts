import { useState, useCallback } from 'react'
import { SetURLSearchParams } from 'react-router-dom'

interface UsePaginationProps {
  initialOffset: number
  limit: number
  total: number
  setSearchParams?: SetURLSearchParams
}

const usePagination = ({
  initialOffset,
  limit,
  total,
  setSearchParams,
}: UsePaginationProps) => {
  const [offset, setOffset] = useState(initialOffset)

  const totalPagesCalc = Math.ceil(total / limit)
  const totalPages = totalPagesCalc < 1 ? 1 : totalPagesCalc

  const currentPage = Math.floor(offset / limit) + 1

  const updateSearchParams = useCallback(
    (newOffset: number) => {
      if (setSearchParams) {
        setSearchParams((params) => {
          const newParams = new URLSearchParams(params)
          newParams.set('offset', String(newOffset))
          newParams.set('limit', String(limit))
          return newParams
        })
      }
    },
    [limit, setSearchParams]
  )

  const goToFirstPage = () => {
    setOffset(0)
    updateSearchParams(0)
  }

  const goToLastPage = () => {
    setOffset((totalPages - 1) * limit)
    updateSearchParams((totalPages - 1) * limit)
  }

  const goToNextPage = () => {
    const nextOffset = offset + limit
    if (nextOffset <= total) {
      setOffset(nextOffset)
      updateSearchParams(nextOffset)
    }
  }

  const goToPreviousPage = () => {
    const prevOffset = offset - limit
    if (prevOffset >= 0) {
      setOffset(prevOffset)
      updateSearchParams(prevOffset)
    }
  }

  return {
    currentPage,
    totalPages,
    goToFirstPage,
    goToLastPage,
    goToNextPage,
    goToPreviousPage,
  }
}

export default usePagination
