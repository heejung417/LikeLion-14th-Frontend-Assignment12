function KakaoLoginButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#FEE500] py-3 text-black/85 hover:brightness-95"
    >
      <svg width="18" height="18" viewBox="0 0 18 18">
        <path
          fill="#000000"
          d="M9 1.5C4.58 1.5 1 4.3 1 7.75c0 2.14 1.39 4.03 3.5 5.16l-.89 3.27c-.08.29.25.52.5.35l3.9-2.58c.33.03.66.05 1 .05 4.42 0 8-2.8 8-6.25S13.42 1.5 9 1.5Z"
        />
      </svg>
      카카오 로그인
    </button>
  );
}

export default KakaoLoginButton;
