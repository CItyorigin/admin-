// 다크모드 토글
document.getElementById('darkModeBtn').addEventListener('click', () => {
  document.getElementById('body').classList.toggle('dark-mode');
});

// 카테고리 토글
document.getElementById('categoryBtn').addEventListener('click', () => {
  const submenu = document.getElementById('submenu');
  submenu.classList.toggle('show-submenu');
});

// 현재 시간 표시
function updateTime() {
  const now = new Date();
  document.getElementById('dateTime').textContent = now.toLocaleString();
}
setInterval(updateTime, 1000);
updateTime();

// 회원가입 폼 보이기
document.getElementById('signupBtn').addEventListener('click', () => {
  document.getElementById('signupForm').classList.remove('d-none');
});

// 회원가입 유효성 검사 및 페이지 이동
document.getElementById('signupForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  if (username.length < 3) {
    alert('아이디는 3자 이상이어야 합니다.');
    return;
  }

  if (password.length < 6) {
    alert('비밀번호는 6자 이상이어야 합니다.');
    return;
  }

  alert(`회원가입 완료! 아이디: ${username}`);
  window.location.href = 'welcome.html';
});
