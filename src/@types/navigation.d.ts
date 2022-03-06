export type ResultNavigationProps = {
  numberAnswersCorrect: number;
};

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      rules: undefined;
      questions: undefined;
      result: ResultNavigationProps;
    }
  }
}
