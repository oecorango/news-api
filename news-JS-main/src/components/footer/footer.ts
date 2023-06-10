import './footer.css';
import schoolLogo from '../../assets/rs_school.svg';
import githubLogo from '../../assets/github.svg';

const containerScholl = document.querySelector('.rs-school');
if (containerScholl) {
  const linkScholl = document.createElement('a');
  linkScholl.href = 'https://rs.school/js/';

  const schollImg = new Image();
  schollImg.src = schoolLogo;
  schollImg.alt = 'RS-School';

  linkScholl.append(schollImg);
  containerScholl.append(linkScholl);
}

const containerGit = document.querySelector('.github');
if (containerGit) {
  const linkGit = document.createElement('a');
  linkGit.href = 'https://github.com/oecorango/';

  const gitImg = new Image();
  gitImg.src = githubLogo;
  gitImg.alt = 'GitHub';

  linkGit.append(gitImg);
  containerGit.append(linkGit);
}
