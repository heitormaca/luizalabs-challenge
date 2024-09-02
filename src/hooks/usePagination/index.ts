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
  const totalPagesCalc = Math.floor(total / limit)

  const totalPages = totalPagesCalc < 1 ? 1 : totalPagesCalc

  const [offset, setOffset] = useState(initialOffset)

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
    const lastOffset = Math.max(total - limit, 0)
    setOffset(lastOffset)
    updateSearchParams(lastOffset)
  }

  const goToNextPage = () => {
    const nextOffset = offset + limit
    if (nextOffset < total) {
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
