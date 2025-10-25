import styles from './TypeBadge.module.css';

const typeColors: { [key: string]: string } = {
  grass: '#74CB48',
  poison: '#A43E9E',
  fire: '#F57D31',
  water: '#6493EB',
  bug: '#A7B723',
  normal: '#AAA67F',
  flying: '#A891EC',
};

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
      {/* <img src={iconPath} alt={typeName} className={styles.icon} /> */}
      <span className={styles.typeName}>{typeName}</span>
    </span>
  );
}