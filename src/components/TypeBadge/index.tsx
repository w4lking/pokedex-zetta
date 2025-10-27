import styles from './TypeBadge.module.css';
import { typeColors } from '@/utils/typeColors';


type TypeBadgeProps = {
  typeName: string;
};

export default function TypeBadge({ typeName }: TypeBadgeProps) {
  const color = typeColors[typeName] || '#777'; 

  return (
    <span 
      className={styles.badge} 
      style={{ backgroundColor: color }}
    >
      <span className={styles.typeName}>{typeName}</span>
    </span>
  );
}