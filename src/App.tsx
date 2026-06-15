import MyCard from './Components/myCard'

function App() {
  return (
    <div className="flex justify-center items-center gap-6 bg-gray-100 min-h-screen">
      <MyCard
      name="Abdul Shakoor"
      description="Frontend developer learning React"
      image="https://via.placeholder.com/400x200"
      />

    </div>
  )
}

export default App