function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(' ')
}

export default classNames
