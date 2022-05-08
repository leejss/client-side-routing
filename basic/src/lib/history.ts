interface BrowerHistory {
  push: (to: string) => void;
  listen: (handler: Function) => void;
}

const createHistory = (): BrowerHistory => {
  const globalHistory = window.history;
  let listeners: Function[] = [];

  const push = (to: string) => {
    globalHistory.pushState({}, "", to);
    // calling listener
    listeners.forEach((fn) => fn && fn());
  };

  const listen = (handler: Function) => {
    listeners.push(handler);
  };

  const history: BrowerHistory = {
    push,
    listen,
  };

  return history;
};

export default createHistory;
