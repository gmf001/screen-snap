import ScreenshotForm from './ScreenshotForm';

interface Props {
  setFile: (input?: string) => void;
}

function Navbar({ setFile }: Props) {
  return (
    <nav className='fixed top-0 z-50 flex w-full justify-center border-b-2 border-gray-900 bg-purple-accent py-2 backdrop-blur-xl'>
      <div className='container flex w-full max-w-screen-lg items-center justify-between space-x-2'>
        <h1 className='text-3xl font-extrabold uppercase text-gray-900'>
          ScreenSnap.it
        </h1>
        <ScreenshotForm setFile={setFile} />
      </div>
    </nav>
  );
}

export default Navbar;
