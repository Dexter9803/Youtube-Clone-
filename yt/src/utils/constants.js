export const API_KEY = "add your own api key";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+API_KEY;

export const VIDEO_DETS = "https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id="

export const YT_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q=";

export const SEARCH_VIDEO_API = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=";

export const YT_BUTTONS = "https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&maxResults=10&key="

export const VIDEO_MAIN_COMMENTS = "https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId="

export const VIDEO_NESTED_COMMENTS = "https://www.googleapis.com/youtube/v3/comments?part=snippet&parentId="

export const OFFSET_LIVE_CHAT = 25


export function timeAgo(publishedDate) {
  const currentDate = new Date();
  const publishedDateTime = new Date(publishedDate);

  const timeDifference = currentDate - publishedDateTime;
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (years > 0) {
      return years === 1 ? "1 year ago" : `${years} years ago`;
  } else if (months > 0) {
      return months === 1 ? "1 month ago" : `${months} months ago`;
  } else if (days > 0) {
      return days === 1 ? "1 day ago" : `${days} days ago`;
  } else if (hours > 0) {
      return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
  } else if (minutes > 0) {
      return minutes === 1 ? "1 minute ago" : `${minutes} minutes ago`;
  } else {
      return "just now";
  }
}

export function formatLargeNumber(number) {
    if (number >= 1e9) {
      return (number / 1e9).toFixed(1) + 'B';
    } else if (number >= 1e6) {
      return (number / 1e6).toFixed(1) + 'M';
    } else if (number >= 1e3) {
      return (number / 1e3).toFixed(1) + 'K';
    } else {
      return number.toString();
    }
  }
