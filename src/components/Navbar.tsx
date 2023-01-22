import ScreenshotForm from './ScreenshotForm';

interface Props {
  setFile: (input?: string) => void;
}

function Navbar({ setFile }: Props) {
  return (
    <nav className='fixed top-0 z-50 flex w-full justify-center bg-dark/80 py-2 backdrop-blur-xl'>
      <div className='container flex w-full max-w-screen-lg items-center justify-between space-x-2'>
        <h1 className='text-2xl font-bold uppercase text-white'>
          Screen<span className='text-primary'>Snap</span>
        </h1>
        <ScreenshotForm setFile={setFile} />
      </div>
    </nav>
  );
}

export default Navbar;
