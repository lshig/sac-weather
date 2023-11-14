import classNames from 'classnames';
import { BsFillMoonStarsFill, BsFillSunFill, BsDribbble } from 'react-icons/bs';

export default function ColorThemeButton({
  handleToggleColorTheme,
  theme
}: {
  handleToggleColorTheme: React.MouseEventHandler;
  theme: string;
}) {
  const getIcon = (theme: string) => {
    switch (theme) {
      case 'dark':
        return <BsFillMoonStarsFill />;
      case 'light':
        return <BsFillSunFill />;
      case 'kings':
        return <BsDribbble />;
      default:
        return <BsDribbble />;
    }
  };

  const getAriaLabel = (theme: string) => {
    switch (theme) {
      case 'dark':
        return 'Use Dark Mode';
      case 'light':
        return 'Use Light Mode';
      case 'kings':
        return 'Use Kings Mode';
      default:
        return 'Use Kings Mode';
    }
  };

  return (
    <button
      type="button"
      aria-label={getAriaLabel(theme)}
      className={classNames(
        'font-semibold uppercase shadow-lg rounded-full p-2 text-gray-200 absolute right-4',
        {
          'bg-gray-950 hover:bg-gray-700': theme === 'dark',
          'bg-gray-700 hover:bg-gray-400': theme === 'light',
          'bg-purple-950 hover:bg-purple-700': theme === 'kings'
        }
      )}
      onClick={handleToggleColorTheme}
    >
      {getIcon(theme)}
    </button>
  );
}
