type CaloriesResumeProps = {
  calories: number
  text: string
}

const CaloriesResume = ({ calories, text } : CaloriesResumeProps) => {

  return (
    <p className="text-white grid grid-cols-1 gap-2 text-center mb-5">
      <span className="text-4xl font-bold">{calories}</span>
      {text}
    </p>
  )
}

export default CaloriesResume