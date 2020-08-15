import os
import json
import pypandoc

def main():
    content = []
    for dirpath, _, filenames in os.walk('./'):
        if not 'build.json' in filenames: 
            print('build.json not found in {0}, skipping'.format(dirpath))
            continue
        with open('{0}/build.json'.format(dirpath), 'r') as f:
            build = json.load(f)
    
        if not 'content' in build:
            print('content not found in build.json, skipping')
            continue

        extra_args = ['--mathjax']
        if 'bibliography' in build and len(build['bibliography']) != 0:
            extra_args.append('--bibliography={0}/{1}'.format(dirpath, build['bibliography']))
            del build['bibliography']
    
        html = pypandoc.convert_file('{0}/{1}'.format(dirpath, build['content']), to='html5', extra_args=extra_args)
   
        del build['content']
        build['html'] = html
        content.append(build) 

    with open('content.json', 'w') as f:
        json.dump(content, f)

if __name__ == '__main__':
    main()