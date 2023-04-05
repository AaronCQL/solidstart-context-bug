import {
  createSignal,
  onMount,
  createContext,
  ParentComponent,
  useContext,
} from "solid-js";

function setup() {
  const [count, setCount] = createSignal(0);
  onMount(() => {
    console.log("onMount from context.tsx");
    setCount(10000000);
  });
  return { count };
}

type ContextValue = ReturnType<typeof setup>;

const Context = createContext<ContextValue>();

export const CountProvider: ParentComponent = (props) => {
  const context: ContextValue = setup();
  return <Context.Provider value={context}>{props.children}</Context.Provider>;
};

export function useCount() {
  const context = useContext(Context);
  if (context == null) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
}
