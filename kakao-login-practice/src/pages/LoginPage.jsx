import { getKakaoAuthorizeUrl } from "../lib/kakao";
import KakaoLoginButton from "../components/KakaoLoginButton";

function LoginPage() {
  const handleKakaoLogin = () => {
    window.location.href = getKakaoAuthorizeUrl();
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-b from-amber-50 to-orange-50 px-4">

      <div className="relative w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
        <div className="relative bg-amber-200 px-6 py-8 text-center">

          <p className="relative text-4xl">👋</p>
          <h2 className="relative mt-2 text-2xl font-bold text-slate-800">반가워요!</h2>
          <p className="relative mt-1 text-sm text-slate-600">카카오 로그인 실습</p>
        </div>

        <div className="p-6 text-center">
          <p className="mb-6 text-sm text-slate-500">
            카카오 계정으로 로그인하고
            <br />
            <span className="font-semibold text-slate-700">내 프로필 카드</span>를 확인해보세요.
          </p>

          <KakaoLoginButton onClick={handleKakaoLogin} />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
