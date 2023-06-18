import { StyledLink } from './Navigation.styled';
import css from './Navigation.module.css';

export const Navigation= () =>  {
  return (
    <nav className={css.navigation}>
      <StyledLink className={css.link} to="/">
        Home
      </StyledLink>

      <StyledLink className={css.link} to="/users">
        Tweets
      </StyledLink>
    </nav>
  );
}
