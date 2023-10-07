import classNames from 'classnames';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

export default function ColorThemeButton({
  handleToggleColorTheme,
  isDarkMode
}: {
  handleToggleColorTheme: React.MouseEventHandler;
  isDarkMode: boolean;
}) {
  return (
    <button
      type="button"
      aria-label={isDarkMode ? 'Use Dark Mode' : 'Use Light Mode'}
      className={classNames(
        'font-semibold uppercase shadow-lg rounded-full p-2 text-gray-200 absolute right-4',
        {
          'visible dark:invisible bg-gray-950 hover:bg-gray-700': isDarkMode,
          'invisible dark:visible bg-gray-700 hover:bg-gray-400': !isDarkMode
        }
      )}
      onClick={handleToggleColorTheme}
    >
      {isDarkMode ? <BsFillMoonStarsFill /> : <BsFillSunFill />}
    </button>
  );
}
