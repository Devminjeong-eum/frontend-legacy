import { useState } from 'react';
import Modal from '@/components/common/Modal';
import MenuSvg from '@/components/svgComponent/MenuSvg';
import CustomButton from '@/components/common/CustomButton';
import LogoSvg from '@/components/svgComponent/LogoSvg';
import SearchBar from './SearchBar';

export default function Header() {
  const [open, setIsOpen] = useState(false);
  const onClickMenu = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div className="bg-main-gradiant-top h-[48px] flex items-center p-6 justify-between border-none">
        <LogoSvg />
        <CustomButton onClick={onClickMenu}>
          <MenuSvg />
        </CustomButton>
      </div>
      <SearchBar />

      <Modal
        isOpen={open}
        buttonLabel="닫기"
        title="다양한 기능을 추가할 계획이니, 많은 기대 부탁드려요!"
        onClickButton={() => setIsOpen(false)}
      />
    </>
  );
}