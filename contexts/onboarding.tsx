import {
  useState,
  useContext,
  createContext,
  ReactNode,
  useEffect
} from 'react';

const OnboardingContext = createContext({
  onboarding: true,
  pageTransitionDuration: 4,
  headingDelay: 4.5,
  textDelay: 4.6,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setOnboarding: () => {}
});

export const OnboardingProvider = ({ children }: { children: ReactNode }) => {
  const [onboarding, setOnboarding] = useState(true);

  const [pageTransitionDuration, setPageTransitionDuration] = useState(4);
  const [headingDelay, setHeadingDelay] = useState(4.5);
  const [textDelay, setTextDelay] = useState(4.6);

  const setOnBoardingFalse = () => setOnboarding(false);

  useEffect(() => {
    if (onboarding) {
      setPageTransitionDuration(4);
      setHeadingDelay(6);
      setTextDelay(6.1);
    } else {
      setPageTransitionDuration(0);
      setHeadingDelay(0.5);
      setTextDelay(0.6);
    }
  }, [onboarding]);

  return (
    <OnboardingContext.Provider
      value={{
        onboarding,
        pageTransitionDuration,
        headingDelay,
        textDelay,
        setOnboarding: setOnBoardingFalse
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
};

export const useOnboarding = () => {
  return useContext(OnboardingContext);
};
