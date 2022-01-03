import Quill from 'quill'

const Embed = Quill.import("blots/embed");
const icons = Quill.import('ui/icons');

class HashTag extends Embed {
  static create(data) {
		const node = super.create(data);
    node.setAttribute("data-value", data);

    node.innerHTML += data;
    return node;
  }

  static value(domNode) {
		return domNode.getAttribute("data-value");
	}
}
HashTag.blotName = 'hashtag';
HashTag.className = 'hashtag';
HashTag.tagName = 'span';
icons['hashtag'] = '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Pricetag</title><path d="M435.25 48h-122.9a14.46 14.46 0 00-10.2 4.2L56.45 297.9a28.85 28.85 0 000 40.7l117 117a28.85 28.85 0 0040.7 0L459.75 210a14.46 14.46 0 004.2-10.2v-123a28.66 28.66 0 00-28.7-28.8z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48"/><path d="M384 160a32 32 0 1132-32 32 32 0 01-32 32z" fill="currentColor"/></svg>'

Quill.register(HashTag);