import { useNavigate } from "react-router-dom";
import { getProfile, clearSession } from "../lib/auth";

function HomePage() {
  const navigate = useNavigate();
  const profile = getProfile();
  const nickname = profile?.nickname ?? "회원";

  const handleLogout = () => {
    clearSession();
    navigate("/login", { replace: true });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-b from-amber-50 to-orange-50 px-4">

      <div className="relative w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
        <div className="relative h-28 bg-amber-200">
          <span className="absolute top-3 right-4 text-xs font-semibold tracking-widest text-orange-700/60">
            PROFILE
          </span>
        </div>

        <div className="px-6 pb-6 text-center">
          {profile?.profileImageUrl ? (
            <img
              src={profile.profileImageUrl}
              alt="프로필"
              className="relative mx-auto -mt-12 h-24 w-24 rounded-full border-4 border-white object-cover shadow-md ring-2 ring-amber-300"
            />
          ) : (
            <div className="relative mx-auto -mt-12 flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-slate-200 text-3xl shadow-md ring-2 ring-amber-300">
              🙂
            </div>
          )}

          <h2 className="mt-3 text-2xl font-bold text-slate-800">
            {nickname} <span className="text-base font-normal text-slate-400">님</span>
          </h2>
          <p className="mt-1 text-sm text-slate-500">오늘도 좋은 하루 보내세요 ☀️</p>

          <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
            카카오 로그인 완료
          </span>

          <div className="my-6 grid grid-cols-2 gap-3 text-left text-sm">
            <div className="rounded-xl bg-slate-50 px-4 py-3">
              <p className="text-xs text-slate-400">닉네임</p>
              <p className="truncate font-semibold text-slate-700">{nickname}</p>
            </div>
            <div className="rounded-xl bg-slate-50 px-4 py-3">
              <p className="text-xs text-slate-400">로그인 방식</p>
              <p className="font-semibold text-slate-700">카카오</p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="w-full rounded-xl border border-slate-300 py-3 text-slate-600 transition hover:border-red-300 hover:bg-red-50 hover:text-red-500"
          >
            로그아웃
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
