
function Footer() {
    const today=new Date();
  return <footer className="bg-primary w-full p-4 font-bold text-lg grid place-items-center    ">
    <h1>
      Copyright&copy; {today.getFullYear()}
    </h1>
  </footer>
}

export default Footer
