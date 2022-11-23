import { Progress } from '@mantine/core';


type ProgressBarProps = {
  label: string;
  value: number;
  title: string;
};

const cssPrefix = 'progressBar';

const ProgressBar = ({
  label,
  value,
  title,
}: ProgressBarProps) => {
  return (
    <div className={cssPrefix}>
      <div className={`${cssPrefix}__header`}>
        <p className={`${cssPrefix}__title`}>{title}</p>
        <p className={`${cssPrefix}__label`}>{label}</p>
      </div>
      <Progress
        value={value}
        radius='xl'
        size='md'
      />
    </div>
  );
};

export default ProgressBar;
