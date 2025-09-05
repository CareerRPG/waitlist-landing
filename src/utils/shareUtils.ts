import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';

export interface ShareOptions {
  filename?: string;
  quality?: number;
  format?: 'png' | 'jpeg';
  scale?: number;
}

/**
 * Converts a DOM element to an image and downloads it
 */
export const downloadElementAsImage = async (
  element: HTMLElement,
  options: ShareOptions = {}
): Promise<void> => {
  const {
    filename = 'careerrpg-result',
    quality = 1,
    format = 'png',
    scale = 2
  } = options;

  try {
    // Ensure element is visible and has proper dimensions
    const originalStyle = element.style.cssText;
    element.style.visibility = 'visible';
    element.style.position = 'static';
    element.style.left = 'auto';
    element.style.top = 'auto';
    
    const canvas = await html2canvas(element, {
      scale,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#000000',
      logging: true,
      width: element.scrollWidth,
      height: element.scrollHeight,
      windowWidth: element.scrollWidth,
      windowHeight: element.scrollHeight,
      foreignObjectRendering: true,
      imageTimeout: 15000,
      removeContainer: true
    });
    
    // Restore original style
    element.style.cssText = originalStyle;

    canvas.toBlob((blob) => {
      if (blob) {
        saveAs(blob, `${filename}.${format}`);
      }
    }, `image/${format}`, quality);
  } catch (error) {
    console.error('Error generating image:', error);
    throw new Error('Failed to generate image');
  }
};

/**
 * Converts a DOM element to a data URL
 */
export const elementToDataURL = async (
  element: HTMLElement,
  options: ShareOptions = {}
): Promise<string> => {
  const {
    quality = 1,
    format = 'png',
    scale = 2
  } = options;

  try {
    // Ensure element is visible and has proper dimensions
    const originalStyle = element.style.cssText;
    element.style.visibility = 'visible';
    element.style.position = 'static';
    element.style.left = 'auto';
    element.style.top = 'auto';
    
    const canvas = await html2canvas(element, {
      scale,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#000000',
      logging: true,
      width: element.scrollWidth,
      height: element.scrollHeight,
      windowWidth: element.scrollWidth,
      windowHeight: element.scrollHeight,
      foreignObjectRendering: true,
      imageTimeout: 15000,
      removeContainer: true
    });
    
    // Restore original style
    element.style.cssText = originalStyle;

    return canvas.toDataURL(`image/${format}`, quality);
  } catch (error) {
    console.error('Error generating image data URL:', error);
    throw new Error('Failed to generate image data URL');
  }
};

/**
 * Share to Instagram Stories (opens Instagram app if available)
 */
export const shareToInstagramStory = async (element: HTMLElement): Promise<void> => {
  try {
    const dataURL = await elementToDataURL(element, {
      filename: 'careerrpg-instagram-story',
      format: 'png',
      scale: 2
    });

    // Convert data URL to blob
    const response = await fetch(dataURL);
    const blob = await response.blob();
    
    // Check if Web Share API is available and supports files
    if (navigator.share && navigator.canShare) {
      const file = new File([blob], 'careerrpg-story.png', { type: 'image/png' });
      try {
        if (navigator.canShare({ files: [file] })) {
          await navigator.share({
            title: 'My CareerRPG Result',
            text: 'Check out my Professional Archetype!',
            files: [file]
          });
          return;
        }
      } catch {
        console.log('Web Share API failed, falling back to download');
      }
    }
    
    // Fallback: download the image and try to open Instagram
    saveAs(blob, 'careerrpg-instagram-story.png');
    
    // Show user instruction for mobile
    if (isMobileDevice()) {
      // Try to open Instagram app
      const instagramUrl = 'instagram://story-camera';
      const fallbackUrl = 'https://www.instagram.com/stories/create/';
      
      try {
        // Create a temporary link to test if Instagram app is available
        const link = document.createElement('a');
        link.href = instagramUrl;
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Show instruction to user
        setTimeout(() => {
          if (confirm('Image saved! Open Instagram to create your story?\n\nTip: Look for the image in your device\'s photo gallery and add it to your Instagram story.')) {
            window.open(fallbackUrl, '_blank');
          }
        }, 1000);
      } catch {
        // Fallback to web Instagram
        if (confirm('Image saved to your device! Open Instagram to create your story?')) {
          window.open(fallbackUrl, '_blank');
        }
      }
    } else {
      // Desktop: just show success message
      alert('Image saved! You can now upload it to Instagram Stories from your mobile device.');
    }
  } catch (error) {
    console.error('Error sharing to Instagram:', error);
    // Final fallback: just download the image
    await downloadElementAsImage(element, {
      filename: 'careerrpg-instagram-story',
      format: 'png'
    });
  }
};

/**
 * Save image to device gallery/downloads
 */
export const saveToGallery = async (
  element: HTMLElement,
  forInstagram: boolean = false
): Promise<void> => {
  const filename = forInstagram 
    ? 'careerrpg-instagram-story' 
    : 'careerrpg-result';
    
  await downloadElementAsImage(element, {
    filename,
    format: 'png',
    scale: 2
  });
};

/**
 * Check if device is mobile
 */
export const isMobileDevice = (): boolean => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};

/**
 * Copy image to clipboard (modern browsers only)
 */
export const copyImageToClipboard = async (element: HTMLElement): Promise<void> => {
  if (!navigator.clipboard || !window.ClipboardItem) {
    throw new Error('Clipboard API not supported');
  }

  try {
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: null,
      logging: false,
    });

    canvas.toBlob(async (blob) => {
      if (blob) {
        const item = new ClipboardItem({ 'image/png': blob });
        await navigator.clipboard.write([item]);
      }
    }, 'image/png');
  } catch (error) {
    console.error('Error copying to clipboard:', error);
    throw new Error('Failed to copy image to clipboard');
  }
};
