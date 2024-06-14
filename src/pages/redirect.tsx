import React from 'react';
import { useNavigate } from 'react-router';

interface RedirectProps {
  to: string;
}

export default function Redirect({ to }: RedirectProps) {
  const nav = useNavigate();

  React.useEffect(() => {
    nav(to);
  }, [nav, to]);

  return <div />;
}
