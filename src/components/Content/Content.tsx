import { useState, useEffect } from "react";
import { SecretNetworkClient } from "secretjs";
import { StyledContent } from "./styled";
import { Header } from "./Header/Header";
import { GetPrivacy } from "./GetPrivacy/GetPrivacy";
import { TokenForm } from "./TokenForm/TokenForm";
import { Footer } from "./Footer/Footer";
import { mergeStateType, TokenOptions, Token, tokens } from "../../config";

interface ContentProps {
  tokenOptions: TokenOptions;
  mergeState: mergeStateType;
}

function getCurrentToken(tokenOptions: TokenOptions): Token {
  return tokens.find((token) => token.name === tokenOptions.name)!;
}

export function Content({ tokenOptions, mergeState }: ContentProps) {
  const [secretjs, setSecretjs] = useState<SecretNetworkClient | null>(null);
  const [secretAddress, setSecretAddress] = useState<string>("");

  useEffect(() => {
    console.log("Content Rendered");
  });

  return (
    <StyledContent>
      <Header
        secretjs={secretjs}
        secretAddress={secretAddress}
        setSecretjs={setSecretjs}
        setSecretAddress={setSecretAddress}
      />
      <div className="content-wrap">
        <GetPrivacy />
        <TokenForm
          tokenOptions={tokenOptions}
          mergeState={mergeState}
          secretjs={secretjs}
          secretAddress={secretAddress}
          setSecretjs={setSecretjs}
          setSecretAddress={setSecretAddress}
          token={getCurrentToken(tokenOptions)}
        />
      </div>
      <Footer />
    </StyledContent>
  );
}
