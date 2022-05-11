import GameHeader from '@components/common/GameHeader';
import SubHeader from './SubHeader';

export default function Header() {
  return (
    <div className="xl:block hidden">
      <GameHeader />
      <SubHeader />
    </div>
  );
}
