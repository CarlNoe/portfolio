function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="flex flex-col">
        <span className="text-white">Hi there ! My name is</span>
        <span className="text-8xl text-tertiary-500">
          Noé <span className="text-secondary">CARL</span>
        </span>
      </div>
      <img
        src="src\assets\moi.png"
        className="w-[30vh]
         md:w-[40vh]"
      />
    </main>
  );
}

export default Home;
