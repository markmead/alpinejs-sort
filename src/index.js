export default function (Alpine) {
  Alpine.directive(
    'sort',
    (el, { modifiers, expression }, { Alpine, effect, evaluateLater }) => {
      const foundEl = el.closest('[x-data]')

      if (!foundEl) {
        return
      }

      const getSortBy = evaluateLater(expression)

      const alpineEl = Alpine.$data(foundEl)

      const [sortKey] = modifiers

      effect(() => {
        getSortBy((sortBy) => {
          const sortItems = [...alpineEl[sortKey]]
          const sortBasic = ['asc', 'desc'].includes(sortBy)

          if (sortBasic) {
            const sortedItems =
              sortBy === 'asc'
                ? sortItems.sort((itemA, itemB) => (itemA > itemB ? 1 : -1))
                : sortItems.sort((itemA, itemB) => (itemA < itemB ? 1 : -1))

            alpineEl[sortKey] = sortedItems

            return
          }

          const [sortDir, ...sortProperties] = sortBy.split('.')

          const sortedItems = sortItems.sort((itemA, itemB) => {
            const propertyA = sortProperties.reduce(
              (propertyA, propertyB) => propertyA[propertyB],
              itemA
            )

            const propertyB = sortProperties.reduce(
              (propertyA, propertyB) => propertyA[propertyB],
              itemB
            )

            return sortDir === 'asc'
              ? propertyA > propertyB
                ? 1
                : -1
              : propertyA < propertyB
              ? 1
              : -1
          })

          alpineEl[sortKey] = sortedItems

          return
        })
      })
    }
  )
}
