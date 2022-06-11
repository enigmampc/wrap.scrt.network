import { StyledTokenList } from './styled';
import { mergeStateType, Token } from '../../../../config';

interface TokenListProps {
  activeTokenName: string,
  setTokenOptions: mergeStateType,
  list: Token[],
}

export const TokenList = ({ setTokenOptions, activeTokenName, list }: TokenListProps) => {
  return (
    <StyledTokenList>
      {list.map(({ name, image, address }) => {
        const active = name === activeTokenName ? "active" : "";
        return (
          <li
            className={`token-wrap ${active}`}
            key={name}
            style={{cursor: address ? "pointer" : "not-allowed"}}
            onClick={address ? () => setTokenOptions({ name, image }) : () => {}}
          >
            <img src={image} alt={name}/>
            <span className="name">{name}</span>
            {!address && <span className="soon">coming soon 🤫</span>}
          </li>
        )
      })}
    </StyledTokenList>
  )
}