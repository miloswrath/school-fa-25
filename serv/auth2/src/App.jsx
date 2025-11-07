import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './App.css';

export default function App() {
  return (
    <Authenticator className="App">
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user?.username}</h1>
          <button
            className="amplify-button amplify-button--primary sign-out-button"
            onClick={signOut}
          >
            Sign out
          </button>
        </main>
      )}
    </Authenticator>
  );
}
