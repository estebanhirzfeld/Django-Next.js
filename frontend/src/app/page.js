import styles from './home.module.css';

const Home = () => {
  return (
    <main className="flex items-center justify-center h-screen">
      <div className={`text-center ${styles.mb15vh}`}>
      <h1 className="text-4xl md:text-6xl lg:text-9xl font-bold mt-4">

          <span className={`text-gradient bg-gradient-to-r from-green-500 to-teal-500 ${styles.djangoRestText}`}>Django Rest</span>
          <br />
          <span className={`text-gradient bg-stone-50 ${styles.plusText}`}>+ </span>
          <span className={`text-gradient bg-gradient-to-r from-blue-500 to-blue-200 ${styles.nextJsText}`}>NextJS</span>
        </h1>
      </div>
    </main>
  );
};

export default Home;
