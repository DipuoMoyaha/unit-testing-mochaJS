function isWeekday(dayOfWeek) {
    console.log(dayOfWeek)
    return (dayOfWeek.startsWith("M")) || 
      (dayOfWeek.startsWith("T")) ||
      (dayOfWeek.startsWith("W")) ||
      (dayOfWeek.startsWith("F"))
  }