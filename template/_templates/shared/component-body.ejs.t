import styles from "./<%= name %>.module.scss";

type <%= name %>Props = {
  // TODO: Replace this placeholder prop with actual component props
  placeholderProp: string;
};

export const <%= name %> = ({ placeholderProp = "<%= name %>Prop" }: <%= name %>Props) => {
  return <div className={styles.selector}>Autogenerated <%= name %> component. Prop value for placeholderProp = {placeholderProp}</div>;
};