import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <ClerkProvider>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        {children}
      </ClerkProvider>
    </div>
  );
};

export default Provider;
