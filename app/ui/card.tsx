interface Activity {
  time: Date;
  category: string;
}

export default function Card({ activity }: { activity: Activity }) {
  const formatTime = (time: Date) => {
    return time
      .toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
      })
      .replace(/\./g, ":");
  };

  let theme = "primary";
  switch (activity.category) {
    case "BANGUN_TIDUR": {
      theme = "secondary";
      break;
    }
    case "BUAT_SUSU": {
      theme = "accent";
      break;
    }
    case "SISA_SUSU": {
      theme = "danger";
      break;
    }
    case "PUP": {
      theme = "warning";
      break;
    }
    default: {
      theme = "netral";
      break;
    }
  }

  return (
    <div>
      <div className='badge badge-accent'>{formatTime(activity.time)}</div>
      <p>{activity.category.replace(/_/g, " ")}</p>
    </div>
  );
}
